/**
 * Posts Data Object to db in specified path
 * returns response body from DB
 *
 * @param1: dbPath - path to point to the db location
 * @param2: index - index that data is to be inserted to
 * @param3: dataObject - data to be inserted in selected index
 **/

export const InitIndex = async (
  dbPath: string,
  index: string,
  dataObject: Mappings,
): Promise<Response> => {
  let mappingsData: BodyInit = JSON.stringify({
    mappings: {
      properties: (dataObject),
    },
  });

  let res = await fetch((dbPath + "/" + index), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: mappingsData,
  });

  return res;
};

export interface Mappings {
  properties: [name: string, type: string];
}
// Use an iterface to define properties to be defined in the init
//
