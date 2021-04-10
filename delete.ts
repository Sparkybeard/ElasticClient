/**
 * Posts Data Object to db in specified path
 * returns response body from DB
 *
 * @param1: dbPath - path to point to the db location
 * @param2: index - index that data is to be inserted to
 * @param3: dataObject - data to be inserted in selected index
 **/

 export const Delete = async (dbPath: string, index: string, id: number) : Promise<Response> => {

    let res = await fetch((dbPath + '/' + index + '/_doc/' + id), {
        method: 'DELETE'
    });

    return res;
}