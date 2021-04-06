/**
 * Posts Data Object to db in specified path
 * returns response body from DB
 *
 * @param1: dbPath - path to point to the db location
 * @param2: index - index that data is to be inserted to
 * @param3: dataObject - data to be inserted in selected index
 **/

export const PostData = async<Type> (dbPath: string, index: string, dataObject: Type): Promise<Response> => {

    // validate dbPAth for termination in '/' or use lib to join paths
    // also needs dbPath + index validation as valid path strings

    let res = await fetch((dbPath + '/' + index), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    });

    return res;
}