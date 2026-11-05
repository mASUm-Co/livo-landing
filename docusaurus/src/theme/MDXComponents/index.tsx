import MDXComponents from '@theme-original/MDXComponents';
import DocScreenshot, {ScreenshotRow} from '@site/src/components/DocScreenshot';

// Docs pages use <DocScreenshot> and <ScreenshotRow> without importing them (#29).
export default {
  ...MDXComponents,
  DocScreenshot,
  ScreenshotRow,
};
