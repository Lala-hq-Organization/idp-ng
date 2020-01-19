const SupportHeader = extraMetadata => {
  let header = {};

  header = {
    headers: {
      ...extraMetadata
    }
  };
  return header;
};
export default SupportHeader;
