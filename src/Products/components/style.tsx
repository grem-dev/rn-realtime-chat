import styled from 'styled-components/native';

// S stands for styles

export const SDepartmentCard = {
  DepartmentCardContainer: styled.View`
    min-width: 50%;
    height: 160px;
    padding: 6px;
    overflow: hidden;
    border-radius: 15px;
  `,
  BgCard: styled.View<any>`
    border-radius: 15px;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.bgColor};
    align-content: center;
    align-items: center;
    justify-content: center;
    /* box-shadow: 1px 5px 0px rgb(40, 40, 40); */
    overflow: hidden;
  `,
  SDepartmentTitle: styled.Text<any>`
    color: ${props => props.color || 'white' };
    text-align: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    padding: 5px;
    background-color: 'rgba(40, 40, 40,0.5)';
  `
};


export const SProduct = {
  Container: styled.View`
    height: 120px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    margin: 5px;
  `,
  Picture: styled.View`
    width: 30%;
    background-color: #bababa;
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
  `,
  Data: styled.View`
    flex: 1;
    padding: 5px;
  `,
};

export const SSearchInput = {
  Container: styled.View`
    height: 60px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    padding: 10px;
  `,
  Input: styled.TextInput`
    flex: 1;
    background-color: #fff;
    color: #222;
    border-radius: 25px;
    border: 1px solid rgb(100, 100, 100);
    padding-left: 20px;
  `,
  IconContainer: styled.View`
    justify-content: center;
    align-items: center;
    min-height: 40px;
    min-width: 40px;
  `,
};
