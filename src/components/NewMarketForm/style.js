import styled from 'styled-components';

export const ContentForm = styled.form`
    width: 340px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #3C3E44;
    padding: 0 10px;
  
    p{
        color: var(--white);
        font-size: 12px;
        margin: 8px 0;
    }
    input{
        width: 100%;
        height: 45px;
        background-color: var(--inputs);
        border: none;
        outline: none;
        padding: 0 18px;
        margin-bottom: 6px;
        color: var(--white);
        font-size: 14px;
    }
    input::placeholder{
        color: #D0D0D0;
    }
    button{
        height: 45px;
        background-color: #8639C2;
        border: none;
        outline: none;
        color: var(--white);
        font-size: 15px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 8px;
    }

    .TouchCam{
        width: 100%;
        height: 45px;
        display: flex;
        background-color: var(--inputs);
        justify-content: center;
        align-content: center;
        align-items: center;
    }
`;
export const Camera = styled.input`
    display: none;
`;