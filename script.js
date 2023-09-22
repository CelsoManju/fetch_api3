
var currentPage = 1;
function loadPage(pageNumber) {

    if (pageNumber < 1 || pageNumber > 50) {
        return; 
      }

    var contentDiv = document.getElementById('contentDiv');
    contentDiv.innerHTML = '';
    console.log(pageNumber);    
    construct(contentDiv,pageNumber);    
    currentPage = pageNumber;
  }
  


async function getdata(){
    try{
    let res= await fetch('https://meowfacts.herokuapp.com/');
    let data = res.json();   
    return data;
    }
    catch(e){console.log(e)}
   
}
async function construct(contentDiv,pageNumber){
    let data = await getdata();
    console.log(data);
    let div =  document.createElement('div');
     div.innerHTML = `<div class="card cardwrapper" style="width: 30rem;" >
     
    <div class="card-img-top" > ${data.data}  </div>  
    </div>
    </div>`
   contentDiv.appendChild(div);


}


