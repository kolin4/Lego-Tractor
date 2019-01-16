import React from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { UPDATE_GENERAL_SETTINGS_SAGA } from '../../actions'

/* eslint-disasble */
const Container = styled.div`
  padding: 1rem;
`
const RadioBox = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:1rem;
`

const ButtonBox = styled.div`
  width:100%;
  display:flex;
  justify-content: flex-end;

  button {
    padding:10px 20px;
    background-color: brown;
    outline:none;
    border:0;
    color:#fff;
    font-weight:bold;
    border-radius:3px;
    cursor:pointer;
  }
`
const General = ({ gearbox, movement, updateGeneral }) => (
  <Container>
    <Form
      onSubmit={values => updateGeneral(values)}
      initialValues={{ movements: movement, gearbox }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <RadioBox>
          Movement
            <label>
              <Field
                type="radio"
                name="movements"
                component="input"
                value="simple"
              />
              {' '}
Simple
            </label>
            <label>
              <Field
                type="radio"
                name="movements"
                component="input"
                value="semi"
              />
              {' '}
Semi - N/A
            </label>
            <label>
              <Field
                type="radio"
                name="movements"
                component="input"
                value="full"
              />
              {' '}
Full - N/A
            </label>
          </RadioBox>
          <RadioBox>
          Gearbox
            <label>
              <Field
                type="radio"
                name="gearbox"
                component="input"
                value="auto"
              />
              {' '}
Automatic
            </label>
            <label>
              <Field
                type="radio"
                name="gearbox"
                component="input"
                value="manual"
              />
              {' '}
Manual - N/A
            </label>
          </RadioBox>
          <ButtonBox>
            <button type="submit">SAVE</button>
          </ButtonBox>
        </form>
      )
    }
    />
  </Container>
)

const mapStateToProps = state => ({
  gearbox: state.settings.gearbox,
  movement: state.settings.movements,
})

const mapDispatchToProps = dispatch => ({
  updateGeneral: values => dispatch({ type: UPDATE_GENERAL_SETTINGS_SAGA, payload: values }),
})
export default connect(mapStateToProps, mapDispatchToProps)(General)
