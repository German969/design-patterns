// These are some of the classes of a complex 3rd-party video conversion framework. We don't control that code, therefore
// can't simplify it.
class VideoFile {
  constructor(filename) {}
}
class OggCompressionCodec {}
class MPEG4CompressionCodec {}
class CodecFactory {
  extract(file) {}
}
class BitrateReader {
  static read(filename, sourceCodec) {}
  static convert(buffer, destinationCodec) {}
}
class Audiomixer {
  fix(result) {}
}

// We create a facade class to hide the framework's complexity behind a simple interface. It's a trade-off between
// functionality and simplicity.
class VideoConverter {
  convert(filename, format) {
    let file = new VideoFile(filename);
    let sourceCodec = (new CodecFactory()).extract(file);
    let destinationCodec;
    if (format === "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCodec();
    }
    let buffer = BitrateReader.read(filename, sourceCodec);
    let result = BitrateReader.convert(buffer, destinationCodec);
    result = (new Audiomixer()).fix(result);

    return (new File(result as any, 'name')) as any;
  }
}

// Application classes don't depend on a billion classes provided by the complex framework. Also, if you decide to
// switch frameworks, you only need to rewrite the facade class.
class Application {
  main() {
    let convertor = new VideoConverter();
    let mp4 = convertor.convert("funny-cats-video.ogg", "mp4");
    mp4.save();
  }
}