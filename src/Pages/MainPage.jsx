function MainPage() {

  return (
    
     <>
     {/*Entire Page div, used to set background color easily*/}
      <div style = {{backgroundColor: "white"}}>
      


        {/*Upper half of main page div*/}
        <div style = {{textAlign: "left"}}>
          {/*Displays text "Person: Total Spent"*/}
          <p style={{fontSize: '48px', fontWeight: "bold", color: "black"}}>
            Person: Total Spent
          </p>
          {/*Div that displays names with money spent in format Name: $*/}
          <div style={{border: "2px solid black", padding: "15px", width: "367px", marginBottom: "15px"}}>
            <p style={{fontSize: '28px'}}>
              Carter: $35.67
            </p>
            <p style={{fontSize: '28px'}}>
              Sam: $18.98
            </p>
            <p style={{fontSize: '28px'}}>
              Nathaniel: $22.54
            </p>
            <p style={{fontSize: '28px'}}>
              Erik: $18.30
            </p>
          </div>
          {/*Div that displays buttons: +, -, edit person*/}
          <div style={{display: "flex", gap: "7px"}}>
            <button onClick={() => navigate("")} style={{backgroundColor: 'black', color: 'greenyellow'}}>
              +
            </button>
            <button onClick={() => navigate("")} style={{backgroundColor: 'black', color: 'red'}}>
              -
            </button>
            <button onClick={() => navigate("")} style={{backgroundColor: 'black', color: 'white'}}>
              Edit Person
            </button>
          </div>

        </div>

        {/*Lower half of page div (list of items to buy)*/}
        <div style={{textAlign: "left", marginTop: "50px"}}>
          {/*Div for title text and 'add item' button*/}
          <div>
            <span style={{fontSize: "54px", fontWeight: "bold", marginRight: "20px", color: "black"}}>
              Items to Buy:
            </span>
            <button onClick={() => navigate("")} style={{backgroundColor: "black", color: "blue"}}>
              +
            </button>
          </div>

          {/*Div for search bar and filter button*/}
          <div style={{marginTop: "15px", marginBottom: "10px"}}>
            
              <input type="text" placeholder="Search..." style={{fontSize: "19px", border: "1px solid black"}}/>
              <button onClick={() => navigate("")} style={{fontSize: "13px", backgroundColor: 'white', color: 'black', border: "1px solid black", marginLeft: "10px"}}>
                Filter
              </button>
            
          </div>

          {/*Div for list of items*/}
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;