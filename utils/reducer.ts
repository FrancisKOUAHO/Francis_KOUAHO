const Reducer = (text: string) => {
    let formate = text.slice(0, 90);
    return formate + '...';
}


export default Reducer
