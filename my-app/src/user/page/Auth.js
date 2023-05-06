import React, { useContext, useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElement/Card';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../util/validators';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [formDetails, setFormDetails] = useState({employeeId: {
        value: "", isValid: false
    }, password: {value: "", isValid: false}, isValid: false});
    const [isValidForm, setIsValidForm] = useState(false);

    const authSubmitHandler = async event => {
        event.preventDefault();
        console.log(formDetails);
    };

    const inputHandler = () => {
        setIsValidForm(currState => currState && state.inputs[inputId].isValid);
        setFormDetails (currState =>  ({
            ...currState,
            inputs: {
                ...state.inputs,
                [action.inputId]: { value: action.value, isValid: action.isValid }
            },
            isValid: isValidForm
        }))
    }
  
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
                {isLoading && <LoadingSpinner asOverlay />}
                <h2>Login Required</h2>
                <hr />
                <form onSubmit={authSubmitHandler}>
                    <Input
                        element="input"
                        id="employeeId"
                        type="email"
                        label="E-Mail"
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a valid password, at least 6 characters."
                        onInput={inputHandler}
                    />
                    <Button type="submit" disabled={!formState.isValid}>
                    </Button>
                </form>
        </React.Fragment>
    );
  };

export default Auth;