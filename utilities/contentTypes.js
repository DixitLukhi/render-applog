const allowedContentTypes = [
  { extn: "mp3", mimeType: "audio/mpeg", fName: "AUD" },
  { extn: "mpeg", mimeType: "audio/mpeg", fName: "AUD" },
  { extn: "aac", mimeType: "audio/aac", fName: "AUD" },
  { extn: "wav", mimeType: "audio/wav", fName: "AUD" },
  { extn: "opus", mimeType: "audio/opus", fName: "AUD" },
  { extn: "amr", mimeType: "audio/amr", fName: "AUD" },
  { extn: "ogg", mimeType: "audio/ogg", fName: "AUD" },
  { extn: "zip", mimeType: "application/zip", fName: "DOC" },
  { extn: "txt", mimeType: "text/plain", fName: "DOC" },
  { extn: "rar", mimeType: "application/vnd.rar", fName: "DOC" },
  { extn: "pdf", mimeType: "application/pdf", fName: "DOC" },
  { extn: "csv", mimeType: "text/csv", fName: "DOC" },
  { extn: "doc", mimeType: "application/msword", fName: "DOC" },
  { extn: "xls", mimeType: "application/vnd.ms-excel", fName: "DOC" },
  { extn: "ppt", mimeType: "application/vnd.ms-powerpoint", fName: "DOC" },
  { extn: "tar", mimeType: "application/x-tar", fName: "DOC" },
  { extn: "tar.gz", mimeType: "application/x-tar", fName: "DOC" },
  {
    extn: "odp",
    mimeType: "application/vnd.oasis.opendocument.presentation",
    fName: "DOC",
  },
  {
    extn: "ods",
    mimeType: "application/vnd.oasis.opendocument.spreadsheet",
    fName: "DOC",
  },
  {
    extn: "odt",
    mimeType: "application/vnd.oasis.opendocument.text",
    fName: "DOC",
  },
  {
    extn: "docx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fName: "DOC",
  },
  {
    extn: "pptx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    fName: "DOC",
  },
  {
    extn: "xlsx",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    fName: "DOC",
  },
  { extn: "7z", mimeType: "application/x-7z-compressed", fName: "DOC" },
  { extn: "webp", mimeType: "image/webp", fName: "IMG" },
  { extn: "png", mimeType: "image/png", fName: "IMG" },
  { extn: "jpg", mimeType: "image/jpeg", fName: "IMG" },
  { extn: "jpeg", mimeType: "image/jpeg", fName: "IMG" },
  { extn: "gif", mimeType: "image/gif", fName: "IMG" },
  { extn: "bmp", mimeType: "image/bmp", fName: "IMG" },
  { extn: "ico", mimeType: "image/vnd.microsoft.icon", fName: "IMG" },
  { extn: "tiff", mimeType: "image/tiff", fName: "IMG" },
  { extn: "svg", mimeType: "image/svg+xml", fName: "IMG" },
  { extn: "avi", mimeType: "video/x-msvideo", fName: "VID" },
  { extn: "mp4", mimeType: "video/mp4", fName: "VID" },
  { extn: "webm", mimeType: "video/webm", fName: "VID" },
  { extn: "webm", mimeType: "audio/webm", fName: "VID" },
  { extn: "3gp", mimeType: "video/3gpp", fName: "VID" },
  { extn: "3gp", mimeType: "audio/3gpp", fName: "VID" },
  { extn: "3gp2", mimeType: "video/3gpp2", fName: "VID" },
  { extn: "3gp2", mimeType: "audio/3gpp2", fName: "VID" },
  { extn: "flv", mimeType: "video/x-flv", fName: "VID" },
  { extn: "m3u8", mimeType: "application/x-mpegURL", fName: "VID" },
  { extn: "ts", mimeType: "video/MP2T", fName: "VID" },
  { extn: "mov", mimeType: "video/quicktime", fName: "VID" },
  { extn: "wmv", mimeType: "video/x-ms-wmv", fName: "VID" },
];

const imagearray = [
  "image/webp",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/vnd.microsoft.icon",
  "image/tiff",
  "image/svg+xml",
];

const videoarray = [
  "video/x-msvideo",
  "video/mp4",
  "video/webm",
  "audio/webm",
  "video/3gpp",
  "audio/3gpp",
  "video/3gpp2",
  "audio/3gpp2",
  "video/x-ms-wmv",
  "video/quicktime",
  "video/MP2T",
  "video/x-flv",
];

const allowedDomains = [
  process.env.ALLOWED_DOMAIN
]

module.exports = { allowedContentTypes, imagearray, videoarray, allowedDomains };
