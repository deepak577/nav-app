import React, {useState} from 'react'
import ImageLib from "./ImageLib"
import './nav.css'
var images = require.context('../../images', false);


export default function PageContent(props) {
    let {name, displayValue, description, image, Gurudev} = props;
    let img_src = [];
    let [num,setNum] = useState(0);
    image.map((ele) => {
      img_src.push(images(`./${ele}`))
    });

    let handleClick = function(idx){
      setNum(idx);
    }

		return (
			
        <div id="content" style={{display:displayValue}}>
          <div id="contentHeader"><span>{name}</span></div>
          <section id="contentDescription">
              {description.content.map(text => {
                return <p>{text}</p>
              })}
          </section>
          <div id="summaryInfo">
          <img id="photo"  src={img_src[num]} alt="Logo" />
          <ImageLib img_src={img_src} handleClick={handleClick}/>
          <section id="summaryInfoTable">
              <span id="summaryInfoLabel">Guru :</span>
              <span>{Gurudev}</span>
          </section>
          </div>
			  </div>
		)
}