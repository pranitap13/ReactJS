// Create a function component named App that will be rendered in the root element
function App() {
  // return JSX that will be rendered
  return (
      // Apply inline styles to the div element
      <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
          <div
              style={{
                  display: "flex",
                  justifyContent: "center"
              }}
          >
              <div>
                  <div>
                      {/* Call PostComponent here to render it in the App component */}
                      <PostComponent
                      name={"Pranita Panchal"}
                      subtitle={"20 followers"}
                      time={"2m ago"}
                      image={"data:image/jpeg;base64,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"}
                      description={"Want to know how to win big? Check out how these folks won $6000 in bounties."}
                     />
                  <br />
                  </div>
                  <div>
                      {/* Call PostComponent here to render it in the App component */}
                      <PostComponent 
                      name={"Pranav Panchal"}
                      subtitle={"1000 followers"}
                      time={"10s ago"}
                      image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShk2BZ3598Jy_EQ0j9Kifx8KeL2O_A9I-iaQ&s"}
                      description={"How to get hired in 2025? Follow this roadmap"}
                      />
                      <br />
                  </div>
                  <div>
                      {/* Call PostComponent here to render it in the App component */}
                      <PostComponent
                      name={"LinkedIn Organisation"}
                      subtitle={"Promoted"}
                      image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"}
                      description={"Looking for Jobs? You have come to the right place, we will help you land a job"} />
                  </div>
              </div>
          </div>
      </div>
  );
}

// Create a style object to apply styles to the div element in PostComponent
const style = {
  width: 250,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
  margin: 10
};

// Create a function component named PostComponent that will be rendered in the App component
function PostComponent({name, subtitle, time, image, description}) {
  // return JSX that will be rendered
  return (
      // Apply style object to the div element
      <div style={style}>
          <div style={{ display: "flex" }}>
              <img
                  src={image}
                  style={{ width: 40, height: 40, borderRadius: 40 }}
              />
              <div style={{ fontSize: 14, marginLeft: 10 }}>
                  <b>{name}</b>
                  <div>{subtitle}</div>
                  {(time!== undefined) ? <div style={{ display: "flex", alignItems: "center" }}> 
            <div>{time}</div>
            <img 
              src={"data:image/png;base64,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"} 
              alt="icon" 
              style={{ width: 15, height: 15}} 
            />
          </div> : null}
        </div>
      </div>
      <div style={{ fontSize: 14, marginTop: 10 }}>{description}</div>
    </div>
  );
}

// Export App Component to use it in other components
export default App;