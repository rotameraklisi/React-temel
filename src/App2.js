import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
    }

//butona basınca state değişme
    switchNameHandler = (newName) => {
        //console.log('Was clicked!');
        //DONT DO THIS:   this.state.person[0].name = 'Maximilian'
        this.setState(
            {
                persons: [
                    {name: newName, age: 28},
                    {name: 'Manu', age: 29},
                    {name: 'Stephanie', age: 27}
                ]
            }
        )
    }

    deletePersonHandler = (personIndex)=>{
//const persons = this.state.persons.splice();
const persons = [...this.state.persons];
        persons.splice(personIndex,1);
this.setState({persons: persons})

    }

    namedChangedHandler = (event,id) =>{

        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        });

        const person ={ ...this.state.person[personIndex]};

        //alternatif
        //const person = Object.assign({},this.state.persons[personIndex])


        person.name = event.target.value;

        const persons = [...this.state.persons];
        person[personIndex] = person;

        // this.setState(
        //     {
        //         persons: [
        //             {id: 'asfa1' , name: 'Max', age: 28},
        //             {id: 'vasdf1' ,name: event.target.value, age: 29},
        //             {id: 'asdf1' ,name: 'Stephanie', age: 26}
        //         ],otherState:'some other value',
        //         showPersons: false
        //     }
        // )

        this.setState({persons:persons});


    }

    togglePersonsHandler = ()=>
    {
const doesShow = this.state.showPersons
        this.setState({showPersons : !doesShow})

    }


        render()
        {
            let persons = null;

            if(this.state.showPersons)
            {
                persons=(
                <div>
                    {this.state.persons.map((person,index)=> {
                        return <Person
                            click = {()=> this.deletePersonHandler(index)}
                            name ={person.name}
                        age = {person.age}
                        key={person.id}
                        changed ={(event)=>this.namedChangedHandler(event,person.id)}/>
                    })}
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Max!')}
                        changed={this.namedChangedHandler}
                    >

                        My hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>
                </div>);

            }

            return (
                <div className="App">
                    <h1> Hi, I'm a React App</h1>
                    <p> This is really working</p>
                    <p> This is really working</p>
                    {/*bind ile fonksiyona parametre verme<button onClick={this.switchNameHandler.bind(this,'Maximailizian')}>Switch Name</button>*/}
                    {/*<button onClick={()=> this.switchNameHandler('MAximilization')}>Switch Name</button>*/}
                    <button onClick={this.togglePersonsHandler}>Switch Name</button>

                {/*    {this.state.showPersons ===true ?*/}
                {/*        <div>*/}
                {/*            <Person*/}
                {/*                name={this.state.persons[0].name}*/}
                {/*                age={this.state.persons[0].age}/>*/}
                {/*            <Person*/}
                {/*                name={this.state.persons[1].name}*/}
                {/*                age={this.state.persons[1].age}*/}
                {/*                click={this.switchNameHandler.bind(this, 'Max!')}*/}
                {/*                changed={this.namedChangedHandler}*/}
                {/*            >*/}

                {/*                My hobbies: Racing*/}
                {/*            </Person>*/}
                {/*            <Person*/}
                {/*                name={this.state.persons[2].name}*/}
                {/*                age={this.state.persons[2].age}/>*/}

                {/*        </div> : null*/}
                {/*    }*/}
               {persons}
                </div>
            )

        }
    }
    export default App;


/*
import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person.js'
import person from "./Person/Person";

const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState, setPersonsState] = useState({

        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ]
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [otherState, setOtherState] = useState('some other value');

//butona bası
// nca state değişme

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        //console.log('Was clicked!');
        //DONT DO THIS:   this.state.person[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ],
            otherState: personsState.otherState
        });
    };
    return (
        <div className="App">
            <h1> Hi, I'm a React App</h1>
            <p> This is really working</p>
            <p> This is really working</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}/>
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}>
                My hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}/>
        </div>
    );
}


export default app;

 */