/**
 * Gets a Data Object from Db
 *
 * @param1: dbPath - path to point to the db location
 * @param2: index - index that data is to be inserted to
 * @param3: id - id of the document to be retrived
 **/
export async function GetData<Type>(dbPath: string, index: string, id: number): Promise<Response> {

    let res = await fetch((dbPath + '/' + index + '/' + id));
    return res;
}

/**
 * Gets a Collection of Data Objects from Db
 *
 * @param1: dbPath - path to point to the db location
 * @param2: index - index that data is to be inserted to
 **/
export async function MultiGet<Type>(dbPath: string, index: string): Promise<Response> {

    let res = await fetch((dbPath + '/' + index + '/_mget'));
    return res;
}