# crawler.py
from crawl4ai import AsyncWebCrawler, BrowserConfig, CacheMode, CrawlerRunConfig, RateLimiter, CrawlerMonitor, DisplayMode, MemoryAdaptiveDispatcher

async def crawl_website(urls: list[str]):
    """Crawl multiple URLs and return their markdown content."""
    browser_config = BrowserConfig(
        browser_type="chromium",
        headless=True, 
        verbose=False
    )
    run_config = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        stream=False
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
        monitor=CrawlerMonitor(display_mode=DisplayMode.AGGREGATED)
    )

    async with AsyncWebCrawler(config=browser_config) as crawler:
        results = await crawler.arun_many(
            urls=urls,
            config=run_config,
            dispatcher=dispatcher
        )

    return results