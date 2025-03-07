import logging
# Configure logging
logging.basicConfig(
    level=logging.DEBUG,  # Use INFO for less verbosity or DEBUG for detailed tracing
    format="%(asctime)s - %(levelname)s - %(name)s - %(message)s"
)

logger = logging.getLogger(__name__)