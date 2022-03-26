import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min'

const Questions = () => {
    return (
        <div className='container mt-4'>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            How react works ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <p>
                                React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app.</p>
                            <p>
                                Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of Reactjs.
                            </p>
                            <p>
                                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                            </p>
                            <p>
                                React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It’s ‘V’ in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.
                                It is maintained by Facebook.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            What is the difference between state and props ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <p>
                                Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
                            </p>
                            <p>
                                <strong>Props:</strong>
                                <p>
                                    The Data is passed from one component to another.
                                </p>
                                <p>
                                    Props can be used with state and functional components.
                                </p>
                                <p>
                                    Props is Immutable.
                                </p>
                                <p>
                                    Props are read-only.
                                </p>
                                <p>
                                    Which lets React do fast reference checks.
                                </p>
                                <p>
                                    Are used to pass data down from your view-controller.
                                </p>
                                <p>
                                    Your top level component.
                                </p>
                                <p>
                                    Use this to pass data to child components.
                                </p>
                                <p>
                                    Have better performance
                                </p>
                            </p>
                            <p>
                                <strong>State</strong>
                                <p>
                                    The Data is passed within the component only.
                                </p>
                                <p>
                                    State can be used only with the state components/class component
                                </p>
                                <p>
                                    State is Mutable.
                                </p>
                                <p>
                                    State is both read and write.
                                </p>
                                <p>
                                    Should be managed in your view-controller.
                                </p>
                                <p>
                                    Your top level component.
                                </p>
                                <p>
                                    Has worse performance.
                                </p>
                                <p>
                                    Should not be accessed from child components.
                                </p>
                                <p>
                                    Pass it down with props instead.
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            how usestate works ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <p>
                                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                            </p>
                            <p>
                                useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                            </p>
                            <p>
                                Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.
                            </p>
                            <p>
                                So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.
                                Declaring
                            </p>
                            <p>
                            The first element is the initial state and the second one is a function that is used for updating the state.
                            </p>
                            <p>
                            The above function is oneline function which computes the sum of two numbers and will be set as the initial state.
                            </p>
                            <p>
                            We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            &nbsp; 
        </div>
        
    );
};

export default Questions;