import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>loreminseuahjdqbifnaijfwfhbbgarugbshjgebghjergbegberghbehghgowgnaeirgsrigbgieajgsnivrghrsogrhgeuirgiñugjrbvñeajgsrgrngsffrngorgsrñjgrbgñghroghregghjgwngjaroignargoregnsrñghrwogrwngoirjowjogneluivgjnkgjsnhhanfereasassanchez</p>
        </div>
    )
}

/**
 * export default Rainbow(About) ya que existe un componente dedicado al estilo del contenido
 * al exportar el component About al Rainbow, el componente rainbow importa todo el conetnido
 * de about y cambia el estilo del mismo
 */
export default Rainbow(About);