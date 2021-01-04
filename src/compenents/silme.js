

                       <form>
                       <input teyp="text" onClick = {this.tikla} /> 
                       <button onClick= {this.sil.bind(this, dispatch)}>SİL</button>
                      
                       
                   
                       {isvisible ?
                      
                      <ul>
                       
                       <li>  Bölüm: {dep}  </li>
                       <li> Maaş:  {salary} </li>
                      
           
           
           
                      </ul>
                       : //null
           
                       <p> İsim: {digerstate} </p>
           
                       }
                       </form>  
                       </div>