import React,{useState,useEffect,useRef} from 'react';
import FlatList from 'flatlist-react';
import './App.css';
import robot from './robot.svg';

let hour = new Date().getHours();
let greet;
if(hour>=1 && hour<12){
  greet = "Good Morning!";
}else if(hour>=12 && hour<6){
  greet = "Good Afternoon!";
}else{
  greet = "Good Evening!";
}

function App() {

  const messagesEndRef = useRef(null);

  const [text,setText] = useState("");
  const [Data,setData] = useState(["This is Chatbot! ask me anything"]);
  const [inputDis,setInputDis] = useState(false);
  const [placeholder,setPlaceholder] = useState("Enter Text here");
  
   useEffect(()=>{
    scrollToBottom(); 
  })

  // scroll down
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView()
    }

  function fun(){
    if(text!==""){
      setData(Data => [...Data, text]);

      //character lowercasing
      let i = text.toLowerCase().split(" ");
      let ans; 

      setTimeout(()=>{
        // Loop for sentence spliting
        for(var j=0;j<i.length;j++){
    
          // First Condition
          if(i[j]==="hello" || i[j]==="salam" || i[j]==="hi"){
          const Random = Math.floor(Math.random() * 3) + 1; 
             if(Random===1){
                ans = greet+" How can I help you.";
             }else if(Random===2){
                ans = greet+" I am available for you.";
             }else{
                ans = greet+" Feel free to ask anything.";
             }
             setData(Data => [...Data, ans]);
             break;
            }

        // Second Condition
         else if(i[j]==="discount" || i[j]==="rebate" || i[j]==="discounts"){
          
          const Random = Math.floor(Math.random() * 3) + 1; 
             if(Random===1){
                ans = "Yes! there are some product on which you will get off prices.";
             }else if(Random===2){
                ans = "Ofcourse you will get discount.";
             }else{
                ans = "We always provide discounts on some product. ";
             }
             setData(Data => [...Data, ans]);
             break;
            }

          // Third Condition
          else if(i[j]==="price" || i[j]==="rate" || i[j]==="prices" || i[j]==="rates"){
            
          const Random = Math.floor(Math.random() * 3) + 1; 
            if(Random===1){
                ans = "There are price tag on every product.";
            }else if(Random===2){
                ans = "Checkout its back you will find the rate.";
            }else{
                ans = "Price is written on it, kindly check it.";
            }
            setData(Data => [...Data, ans]);
            break;
          }

          // Fourth Condition
          else if(i[j]==="bye"){
  
          const Random = Math.floor(Math.random() * 3) + 1; 
            if(Random===1){
                ans = "See you next time.";
            }else if(Random===2){
                ans = "Take care.";
            }else{
                ans = "Bye. keep visiting our store.";
            }
                setData(Data => [...Data, ans]);
                setInputDis(true);
                setPlaceholder("System is Stopped!!");
                break;
              }

            
           // Fifth Condition
           else if(i[j]==="found" || i[j]==="find"){
  
            const Random = Math.floor(Math.random() * 3) + 1; 
              if(Random===1){
                  ans = "It is next to block B.";
              }else if(Random===2){
                  ans = "In the same line with Grocery.";
              }else{
                  ans = "Go straight and then left.";
              }
                  setData(Data => [...Data, ans]);
                  break;
                }

            // sixth Condition
            else if(i[j]==="close" || i[j]==="closed" || i[j]==="opens" || i[j]==="open"){
  
            const Random = Math.floor(Math.random() * 3) + 1; 
              if(Random===1){
                  ans = "Its open 24/7.";
              }else if(Random===2){
                  ans = "Its open 365 days a year.";
              }else{
                  ans = "Its Open Whole day.";
              }
                  setData(Data => [...Data, ans]);
                  break;
              }
              
            // Seventh Condition
            else if(i[j]==="available" || i[j]==="accessable"){
  
              const Random = Math.floor(Math.random() * 3) + 1; 
                if(Random===1){
                    ans = "Yes! It is in our stock.";
                }else if(Random===2){
                    ans = "Yeah! you can avail it.";
                }else{
                    ans = "Obviously! it is accessable here.";
                }
                    setData(Data => [...Data, ans]);
                    break;
                }
                // Eight Condition
            else if(i[j]==="you" || i[j]==="doing" ){
  
              const Random = Math.floor(Math.random() * 3) + 1; 
                if(Random===1){
                    ans = "I am Good! Thanks";
                }else if(Random===2){
                    ans = "I am Doing well.";
                }else{
                    ans = "I am Fine! Thanks for asking.";
                }
                    setData(Data => [...Data, ans]);
                    break;
                }
                 // Nineth Condition
            else if(i[j]==="delivery" || i[j]==="deliver" ){
  
              const Random = Math.floor(Math.random() * 3) + 1; 
                if(Random===1){
                    ans = "Yes! Delivery are available.";
                }else if(Random===2){
                    ans = "Sure! we have delivery team.";
                }else{
                    ans = "Ofcourse! we are delivering goods.";
                }
                    setData(Data => [...Data, ans]);
                    break;
                }
              else{
                if(j===i.length-1){

                  const Random = Math.floor(Math.random() * 3) + 1; 
                        if(Random===1){
                            ans = "Ask Something else.";
                        }else if(Random===2){
                            ans = "Anything else.";
                        }else{
                            ans = "Sorry! I am not trained to answer it.";
                        }
                  setData(Data => [...Data, ans]);
                }
              }
            
          
          }
          

      },1300)
      
    }
      setText("");
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="chatbox">
      
      <div className="row">
        <img src={robot} className="App-logo col-sm-4" />
        <h1 className="heading col-sm-4">Abc Store</h1>
        <img src={robot} className="App-logo col-sm-4" />
        </div>

    <div className="chat">
  
    <FlatList
              list={Data}
              renderItem={(item)=> 
            <p className="line">-> {item}</p>
              }
          />
          <div ref={messagesEndRef} />
    </div>
        
      <div className="inputbox">
      <input type="text" value={text} onChange={(event)=> setText(event.target.value)} className="chatinput"
       placeholder={placeholder} disabled={inputDis} />

      <input type="submit" className="btn btn-primary" onClick={fun} title="Send" disabled={inputDis} />
      </div>
      
      </div>
      </header>
    </div>
  );
}

export default App;
