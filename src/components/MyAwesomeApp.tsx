    const firstName: string = 'Lucas';
    const lastName: string = 'Caballero';

    const favortioGames = ['Elder Ring', 'Smash', 'God of War'];

    const isActive = true;
    
    /* interface Object = {
        addres = String
    }
 */
    const object = {
        address:"dir"
    }





export const MyAwesomeApp =() => {


    return(
        <>
        <h1>{ firstName }</h1>
        <h3>{ lastName } </h3>
        <h5>{ favortioGames.join(', ') } </h5>
        <h4> { isActive ? 'activo' : 'no activo'} </h4>
        <h4> { object.address } </h4>
        </>
    )
}