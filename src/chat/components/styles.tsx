import styled from 'styled-components/native';


export const ChatHomeCard = {
  ChatContainer: styled.View`
    background-color: white;
    min-height: 50px; 
    padding: 8px;
    /* elevation: 3;  */
    flex-direction: row;
    margin-bottom: 5px;
  `,
  Body: styled.View`
    height: 100%;
    flex: 1;
    margin-left: 15px;
    margin-top: 7px;
  `,
  Avatar: styled.View`
    width: 54px;
    background-color: rgb(200, 200, 204);
    height: 54px;
    border-radius: 27px;
  `,
  LastMessageText: styled.Text`
    font-size: 13px;
    color: rgb(83, 83, 83);
  `,
  Username: styled.Text`
    font-size: 13px;
    /* font-weight: 400; */
    font-weight: bold;
    color: rgb(30, 30, 30);
  `,
  DateSend: styled.Text`
    font-size: 10px;
    color: rgb(100, 100, 100);
    text-align: right;
    margin-right: 10px;
  `,
}

export const SHistoriBubble = {
  Container: styled.View`
    max-height: 90px;
    max-width: 60px;
    /* background-color: #fff; */
    margin: 3px;
    overflow: hidden;
  `,
  Bubble: styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #aaa;
  `,
  User: styled.Text`
    font-size: 12px;
    text-align: center;
  `,
}

export const SHistoriList = {
  Container: styled.ScrollView`
    /* background-color: #bad; */
    margin: 10px;
    overflow: visible;
  `,
}