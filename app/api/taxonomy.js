import fsPromises from "fs/promises";
import path from "path";

export const getTaxonomy = async () => {
  const filePath = path.join(process.cwd(), "data/taxonomycontent.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);
  return objectData;

  /*
  const res = await fetch(`http://localhost:3000/data/taxonomycontent.json`, {
    next: { revalidate: 3600 },
  });
  const taxonomy = await res.json();
    return taxonomy;

  */
};