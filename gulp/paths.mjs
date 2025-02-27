'use strict';
const paths = {
  assetsFolderName: 'assets',
  dataFolderName: '_data',
  iconFolderName: 'icons',
  includesFolderName: '_includes',
  imageFolderName: 'images',
  layoutsFolderName: '_layouts',
  scriptFolderName: 'javascripts',
  siteFolderName: 'dist',
  sourceFolderName: 'src',
  stylesFolderName: 'stylesheets',
  tempFolderName: '.tmp',
  audioFolderName: 'audio',
  docsFolderName: 'docs',

  prodUrl: 'https://www.itsolver.net',

  // Directory locations
  get sourceDir() { return `${this.sourceFolderName}/`; },
  get assetsDir() { return `${this.assetsFolderName}/`; },
  get tempDir() { return `${this.tempFolderName}/`; },
  get siteDir() { return `${this.siteFolderName}/`; },

  // Source asset files locations.
  get sassFiles() { return `${this.sourceDir}${this.assetsDir}${this.stylesFolderName}`; },
  get jsFiles() { return `${this.sourceDir}${this.assetsDir}${this.scriptFolderName}`; },
  get iconFiles() { return `${this.sourceDir}${this.assetsDir}${this.iconFolderName}`; },
  get imageFiles() { return `${this.sourceDir}${this.assetsDir}${this.imageFolderName}`; },
  get fontFiles() { return `${this.sourceDir}${this.assetsDir}${this.fontFolderName}`; },
  get audioFiles() { return `${this.sourceDir}${this.assetsDir}${this.audioFolderName}`; },
  get docsFiles() { return `${this.sourceDir}${this.assetsDir}${this.docsFolderName}`; },

  // Temp asset files locations.
  get assetFilesTemp() { return `${this.tempDir}${this.assetsFolderName}`; },
  get sassFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.stylesFolderName}`; },
  get jsFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.scriptFolderName}`; },
  get iconFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.iconFolderName}`; },
  get imageFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.imageFolderName}`; },
  get fontFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.fontFolderName}`; },
  get audioFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.audioFolderName}`; },
  get docsFilesTemp() { return `${this.tempDir}${this.assetsDir}${this.docsFolderName}`; },

  // Site asset files locations.
  get assetFilesSite() { return `${this.siteDir}${this.assetsFolderName}`; },
  get sassFilesSite() { return `${this.siteDir}${this.assetsDir}${this.stylesFolderName}`; },
  get jsFilesSite() { return `${this.siteDir}${this.assetsDir}${this.scriptFolderName}`; },
  get iconFilesSite() { return `${this.siteDir}${this.assetsDir}${this.iconFolderName}`; },
  get imageFilesSite() { return `${this.siteDir}${this.assetsDir}${this.imageFolderName}`; },
  get fontFilesSite() { return `${this.siteDir}${this.assetsDir}${this.fontFolderName}`; },
  get audioFilesSite() { return `${this.siteDir}${this.assetsDir}${this.audioFolderName}`; },
  get docsFilesSite() { return `${this.siteDir}${this.assetsDir}${this.docsFolderName}`; },

  // Glob patterns by file type.
  sassPattern: '/**/*.scss',
  jsPattern: '/**/*.js',
  imagePattern: '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)',
  markdownPattern: '/**/*.+(md|MD|markdown|MARKDOWN)',
  htmlPattern: '/**/*.html',
  txtPattern: '/**/*.txt',
  xmlPattern: '/**/*.{xml,json}',
  ymlPattern: '/**/*.yml',
  audioPattern: '/*.+(mp3|ogg|wav)',
  docsPattern: '/*.+(pdf|rtf|)',

  // File globs
  get htmlFilesGlob() { return `${this.sourceFolderName}${this.htmlPattern}`; },
  get imageFilesGlob() { return `${this.imageFiles}${this.imagePattern}`; },
  get jsFilesGlob() { return `${this.jsFiles}${this.jsPattern}`; },
  get mdFilesGlob() { return `${this.sourceFolderName}${this.markdownPattern}`; },
  get sassFilesGlob() { return `${this.sassFiles}${this.sassPattern}`; },
  get txtFilesGlob() { return `${this.sourceFolderName}${this.txtPattern}`; },
  get xmlFilesGlob() { return `${this.sourceFolderName}${this.xmlPattern}`; },
  get ymlFilesGlob() { return `${this.sourceFolderName}${this.ymlPattern}`; },
  get audioFilesGlob() { return `${this.audioFiles}${this.audioPattern}`; },
  get docsFilesGlob() { return `${this.docsFiles}${this.docsPattern}`; },
};

export default paths;
