# crawler.py
from crawl4ai import AsyncWebCrawler, BrowserConfig, CacheMode, CrawlerRunConfig, DefaultMarkdownGenerator, PruningContentFilter, RateLimiter, CrawlerMonitor, DisplayMode, MemoryAdaptiveDispatcher

async def crawl_website(urls: list[str], headless: bool = True):
    """Crawl multiple URLs and return their markdown content."""
    browser_config = BrowserConfig(
        browser_type="chromium",
        headless=headless, 
        verbose=False,
    )
    
    prune_filter = PruningContentFilter(
        threshold=0.45,
        threshold_type="dynamic",
        min_word_threshold=5
    )

    md_generator = DefaultMarkdownGenerator(content_filter=prune_filter)

    run_config = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        stream=False,
        markdown_generator=md_generator
    )

    dispatcher = MemoryAdaptiveDispatcher(
        memory_threshold_percent=80.0,
        check_interval=1.0,
        max_session_permit=20,
        rate_limiter=RateLimiter(
            base_delay=(0.5, 1.0),
            max_delay=10.0,
            max_retries=2
        ),
    )

    async with AsyncWebCrawler(config=browser_config) as crawler:
        results = await crawler.arun_many(
            urls=urls,
            config=run_config,
            dispatcher=dispatcher
        )

    return results