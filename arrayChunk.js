function arrayChunk(arr, size) {
  const chunks = [];

  let chunkSize = Math.ceil(arr.length / size);

  for (let i = 0; i < size; i++) {
    const chunk = arr.splice(0, chunkSize);
    chunks.push(chunk);

    const remainingChunks = size - chunks.length;
    if (remainingChunks > 0) {
      chunkSize = Math.ceil(arr.length / remainingChunks);
    }
  }

  return chunks;
}

console.log(
  arrayChunk(
    [1, 2, 3, 4, 5, 6, 7, 23, 4, 3, 43, 5, 5, 6, 6, 6, 6, 5, 5, 4, 4, 4],
    4
  )
);
