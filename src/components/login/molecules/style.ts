import { styled } from 'styled-components';

const M = {
  BackdropContainer: styled.button`
    z-index: 11;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(11, 19, 30, 0.37);
    backdrop-filter: blur(0.0938rem);
  `,
  OverlayBox: styled.div`
    z-index: 12;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 1.25rem;
    background: #fff;
  `,
  SocialLoginLink: styled.div`
    width: 18.75rem;
    height: 2.8125rem;
  `,
  KakaoImage: styled.img`
    width: inherit;
    height: inherit;
  `,
  LoginTitle: styled.p`
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  `,
};

export { M };
