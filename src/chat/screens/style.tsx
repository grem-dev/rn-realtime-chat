import styled, { css } from 'styled-components/native';


export const InputContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #455;
  flex-direction: row;
  display: flex;  border-top-width: 2px;
  border-color: rgb(100, 100, 100);
`

export const SendBtn = styled.View`
  width: 60px;
  height: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  align-self: center;
`

export const MsgWrapper = css`
  display: flex;
  flex: 1;
  margin: 5px;
  margin-bottom: 0px;
  padding: 5px;
  padding-left: 8px;

  min-width: 100px;
  max-width: 70%;
  min-height: 30px;
  max-width: 65%;
  border-radius: 6px;

  background-color: white;
  border: 2px;
  border-color: rgb(30, 30, 40);
`

export const SelfMessage = styled.View`
  ${MsgWrapper};
  margin-left: auto;
`

export const Message = styled.View`
  ${MsgWrapper};
  margin-right: auto;
`


export const MsgUsername = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: rgb(40, 40, 40);
`

export const MsgContent = styled.Text`
  margin-top: 3px;
  font-size: 14px;
  color: rgb(20, 20, 20);
`

export const ScrollMessageHolder = styled.ScrollView`
  background-color: white;
`

export const MsgTextInput = styled.TextInput`
  flex: 1;
  height: 60px;
  background-color: white;

  padding-left: 15px;
  max-height: 120px;
`