import React from "react";

function EditPerson({ people, setPeople, closePopup }) {

    //Return pop up of div
    return (
        <div style={styles.overlay}>
            {/*Popup box div*/}
            <div style={styles.popup}>
                <h2>
                    Edit Person
                </h2>


                {/*Dropdown to edit person*/}
                <p>
                    Edit functionality coming soon...
                </p>


                <div>
                    {/*Edit person button*/}
                    <button onClick={closePopup} style={{ marginLeft: "10px", border: "1px solid black" }}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );

}

//Styles object used to format popup
const styles = {
  //Overlay (full screen) style
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", //Dims the background
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  //Popup box style
  popup: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "200px"
  },
  //User input style
  input: {
    width: "100%",
    marginBottom: "15px",
    padding: "5px"
  }
};

export default EditPerson;