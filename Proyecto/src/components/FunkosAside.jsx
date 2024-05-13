


export const FunkosAside = ({onChange}) => {



    return(
        <aside className="container__shop__aside">
                <form className="container__shop__form">
                    <div className="container__shop__div">
                        <label htmlFor="search">BUSCAR</label>
                        <input className="container__shop__input" type="text" name="search" id="search"
                            placeholder="item o  categoria" onChange={(e) => onChange(e.target.value)}/>
                    </div>
                    <div className="container__shop__div">
                        <label htmlFor="sort">ORDENAR POR</label>
                        <select name="sort" id="sort">
                            <option value="most">Mayor a menor</option>
                            <option value="less">Menor a mayor</option>
                        </select>

                    </div>
                    <div className="container__shop__div">
                        <label htmlFor="mont">PRECIO</label>
                        <div className="container__shop__div2">

                            <label htmlFor="min">MIN</label>
                            <input type="number" name="min" id="min"/>
                            
                            <label htmlFor="max">MAX</label>
                            <input type="number" name="max" id="max"/>
                        </div>
                    </div>
                    <div className="container__shop__div">
                        <label htmlFor="filter">FILTRAR</label>

                        <div className="container__shop__checks">
                            <div className="container__shop__chekcs2">
                                <input type="checkbox" name="new" id="new"/>
                                <label htmlFor="new">NUEVOS</label>
                            </div>
                            <div className="container__shop__chekcs2">
                                <input type="checkbox" name="sale" id="sale"/>
                                <label htmlFor="sale">OFERTAS</label>
                            </div>
                            <div className="container__shop__chekcs2">
                                <input type="checkbox" name="special" id="special"/>
                                <label htmlFor="special">EDICIÓN ESPECIAL</label>
                            </div>
                            <div className="container__shop__chekcs2">
                                <input type="checkbox" name="fav" id="fav"/>
                                <label htmlFor="fav">FAVORITOS</label>
                            </div>
                        </div>
                    </div>


                </form>
            </aside>
    )
}