import React from 'react'

function Button({bgColor,
     btnBorderColor, 
     onclick, 
     btnOpacity,
      btnPad, 
      bdRad,
       border, children}) {
  
    const bgBtn = ['orange', 'red']; 
    const btnOutline = ['none', 'orange'];
    const btnBorder = ['border-1', 'border-2', 'border-3' ];
    const btnRound = ['rounded-lg', 'rounded-[1.2rem]']; 
    const btnP = ['px-5 py-1', 'px-14 py-2'];
    const btnOpaq = ['opacity-20', 'opacity-30']
    


    const bgColors = bgBtn.includes(bgColor) ? `bg-${bgColor}-500` : 'bg-orange-400';
    const outlineColor = btnOutline.includes(btnBorderColor) ? `border-${btnBorderColor}-400` : 'border-0'
    const btnBd = btnBorder.includes(border) ? `${border}` : 'border-0';
    const btnRad = btnRound.includes(bdRad) ? `${bdRad}` : 'rounded';
    const btnPadding = btnP.includes(btnPad) ? `${btnPad}` : 'px-4 py-1';
    const opacityBtn = btnOpaq.includes(btnOpacity) ? `bg-${btnOpacity}` : null;
    
    
    return (
    <>
        <button onClick={onclick} className={`${bgColors} 
        ${btnRad}
        ${btnBd}
        ${outlineColor} ${btnPadding} ${opacityBtn} font-bold text-[1rem] text-white`}>{children}</button>
    </>
  )
}

export default Button