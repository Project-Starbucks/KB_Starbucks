let detail = {
    kName: '나이트로 바닐라 크림',
    eName: 'Nitro Vanilla Cream',
    explain: '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!',
    nutrition : ['Tall(톨) / 355ml(12 fl oz)',80,40,2,10,1,232],
    quantity : 0,
    img : 'img10.jpg',
    allergy: '우유'
}

window.onload = function () {
    //--- kname 객체 detail INPUT START ---//
    let knameObj=document.querySelector('.subtitle')
    knameObj.innerHTML=detail['kName']
    //--- kname 객체 detail INPUT END ---//


    //--- ename 객체 detail INPUT START ---//
    let enameObj=document.querySelector('.subtitle_2')
    enameObj.innerHTML=detail['eName']
    //--- ename 객체 detail INPUT END ---//


    //---explain 객체 detail 요소 input START---//
    let explainObjs = document.querySelectorAll('p.explain')
    explainObjs.forEach(function (explainObj, index) {
        let explainText = document.createTextNode(detail['explain'])
        explainObj.appendChild(explainText)
    })
    //---explain 객체 detail 요소 input END ---//


    //---allergy 객체 detail Input START---//
    let allergyObj = document.querySelector('p.allergy')
    if (detail['allergy']){
        let allergyText = document.createTextNode('알레르기 유발요인 : '+ detail['allergy'])
        allergyObj.appendChild(allergyText)
    }else{
        allergyObj.style.display = 'none'
    }
    //---allergy 객체 detail Input END---//


    //--- nutrition 객체 detail INPUT START ---//
    let nutritionObjs = document.querySelectorAll('.td2,.td4')
    nutritionObjs.forEach(function(nutritionObj,index){
        nutritionObj.innerHTML = detail['nutrition'][index]
    })
    //--- nutrition 객체 detail INPUT END ---//


    //---img 객체 detail INPUT START ---//
    let imgObjs = document.querySelectorAll('.pic > img')
    imgObjs.forEach(function(imgObj,index){
        imgObj.src = '../images/'+detail['img']
        console.log(imgObj.src)
        imgObj.alt = detail['kName']
    })
    //---pic 객체 detail INPUT END ---//

    
    //---count 객체 click Event Hander Start ---//
    let countObj = document.querySelector('.count > p>input')
    countObj.onchange = function(){
        detail['quantity'] = countObj.value
    }
    //---count 객체 click Event Hander END ---//
}
