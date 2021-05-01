import React from "react";
import axios from "axios";

import DisplayImages from "./DisplayImages";
import Search from "./Search";
import ModalUpdate from "./ModalUpdate";
import ModalAdd from "./ModalAdd";
import AddUser from "./AddUser";
import Login from "./Login"; // Login
import CurrentUser from "./CurrentUser";
import Footer from "./footer";

import "./App.css";

class App extends React.Component {
  state = {
    peopleApi: [],
    peopleData: [],
    search: "",
    email: "",
    error: "",
    currentUser: [],
  };

  // Login
  login = (details) => {
    this.state.peopleData.forEach((person) => {
      if (
        person.email === details.email &&
        person.password === details.password
      ) {
        this.setState({ email: details.email, error: "", currentUser: person });
        return;
      } else {
        this.setState({ error: "Details do not match!" });
        return;
      }
    });
  };

  // Logout
  logout = () => {
    this.setState({ email: "", error: "" });
  };

  getImages = async () => {
    const response = await axios.get("https://reqres.in/api/users?per_page=10");
    this.setState({ peopleApi: response.data.data });
    this.setState({ peopleData: this.state.peopleApi });
    this.addPassword();
    console.log(this.state.peopleData);
  };

  componentDidMount() {
    this.getImages();
  }

  onInputChange = (term) => {
    this.setState({
      search: term,
    });
  };

  addPassword = () => {
    let peopleDataCopy = [...this.state.peopleData];
    peopleDataCopy.forEach((person) => {
      person.password = person.first_name[0].concat(
        person.last_name.toLowerCase()
      );
    });

    this.setState({ peopleData: peopleDataCopy });
  };

  addNewPerson = (firstName, lastName, imageURL, email, password) => {
    let peopleDataCopy = [...this.state.peopleData];

    const personId = Math.max.apply(
      Math,
      peopleDataCopy.map(function (person) {
        return person.id + 1;
      })
    );

    const newPerson = {
      id: personId,
      email: email,
      first_name: firstName,
      last_name: lastName,
      avatar: imageURL,
      password: password,
    };

    peopleDataCopy.push(newPerson);
    this.setState({
      peopleData: peopleDataCopy,
    });
  };

  // deleteHandler = (id) => {
  //   this.setState((state) => ({
  //     peopleData: state.peopleData.filter((person) => person.id !== id),
  //   }));
  // };

  deleteHandler = (id) => {
    let peopleDataCopy = [...this.state.peopleData].filter(
      (person) => person.id !== id
    );
    this.setState({
      peopleData: peopleDataCopy,
    });
  };

  updateHandler = (firstName, lastName, url, email, id, password) => {
    let peopleDataCopy = [...this.state.peopleData];
    const personNew = peopleDataCopy.filter((person) => person.id === id).pop();

    personNew.first_name = firstName;
    personNew.last_name = lastName;
    personNew.avatar = url;
    personNew.email = email;
    personNew.password = password;

    peopleDataCopy.forEach((person) => {
      if (person.id === id) {
        person = personNew;
      }
    });
    this.setState({
      peopleData: peopleDataCopy,
    });
  };

  customStyles = {
    content: {
      top: "50%",
      width: "500px",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  render() {
    return (
      <div>
        {this.state.email !== "" ? (
          <div className="welcome">
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "20px",
              }}
            >
              <CurrentUser currentUser={this.state.currentUser} />
              <Search onInputChange={this.onInputChange} />
            </div>
            <div style={{ position: "absolute", marginLeft: "10%" }}>
              <DisplayImages
                className="people-list"
                people={this.state.peopleData.filter(
                  (item) =>
                    item.first_name
                      .toLowerCase()
                      .includes(this.state.search.toLowerCase()) ||
                    item.last_name
                      .toLowerCase()
                      .includes(this.state.search.toLocaleLowerCase())
                )}
                deleteHandler={this.deleteHandler}
                updateHandler={this.updateHandler}
              />
            </div>
            <ModalUpdate />
            <AddUser
              addNewPerson={this.addNewPerson}
              peopleData={this.state.peopleData}
            />
            <ModalAdd />
            <button
              style={{ position: "absolute", top: "20px", right: "150px" }}
              className="ui large button"
              onClick={this.logout}
            >
              <i class="power off icon"></i>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Login login={this.login} error={this.state.error} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
export default App;
