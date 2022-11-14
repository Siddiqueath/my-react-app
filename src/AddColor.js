import { useState } from 'react';

export default function AddColor() {
  const [colorList, setColorList] = useState(['red', 'green']);

  const [color, setColor] = useState('red');

  const styles = {
    fontSize: '18px',
    backgroundColor: color,
    width: '290px'
  };

  const addColorStyle = {
    marginTop: '20px',
  };

  const btnStyle = {
    fontSize: '18px',
  };

  return (
    <div className='add-color' style={addColorStyle}>
      <input
        placeholder='enter a color name'
        type='text'
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        value={color} />
      <button style={btnStyle}
        onClick={() => setColorList([...colorList, color])}> Add color
      </button>
      {colorList.map((clr) => <ColorBox color={clr} />)}
    </div>
  );
}

function ColorBox({color}){
  const styles = {
    width: '300px',
    height: '30px',
    backgroundColor: color,
    marginTop: '10px'
  }
  return (<div style={styles}></div>);
}