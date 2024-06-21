import {useCallback} from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const usePDF = () => {
  const writeToPDF = useCallback(async (out_str: string, fileName: string) => {
    let options = {
      html: `
        <pre style="display: flex; justify-content: center">${out_str}</pre>`,
      fileName: fileName,
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);

    return file.filePath;
  }, []);

  return {writeToPDF};
};

export default usePDF;
