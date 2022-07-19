// Custom Hooks
import { useWindowSize } from '../hooks/useWindowSize';

// Styled-components
import styled from 'styled-components';

type StyledProps = {
    deviceWidth: any;
    deviceHeight: any;
};

const DesktopHeader = styled.header<StyledProps>`
    //Query device Height to lock text in relative to background image
    height: ${(props) => props.deviceWidth}px;
    img {
        /* Layout */
        position: absolute;
        width: 100%;
        height: auto;
        overflow: hidden;
        z-index: -10;

        /* Design */
        filter: brightness(60%);
    }

    section {
        /* Layout */
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        /* Typography */
        color: white;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2.5px;
        line-height: 1.4;

        h1 {
            /* Typography */
            font-size: 7.3rem;
            font-weight: 500;

            /* Layout */
            // Lock Margin relative to background
            margin-bottom: ${(props) => props.deviceWidth * (20 / 1920)}px;
        }
        p {
            /* Typography */
            font-size: 4.3rem;
            font-weight: 200;
        }
    }
    /* Adjust Font Size */
    @media (max-width: 500px) {
        section {
            h1 {
                font-size: 6.4rem;
            }
            p {
                font-size: 2.8rem;
            }
        }
    }
    @media (max-width: 370px) {
        section {
            h1 {
                font-size: 5rem;
            }
            p {
                font-size: 2rem;
            }
        }
    }
    @media (max-width: 280px) {
        section {
            h1 {
                font-size: 4rem;
            }
            p {
                font-size: 1.6rem;
            }
        }
    }
`;

export default function MobileBanner() {
    const [deviceHeight, deviceWidth] = useWindowSize();

    return (
        <DesktopHeader deviceWidth={deviceWidth} deviceHeight={deviceHeight}>
            <img src="http://via.placeholder.com/600x600" alt="Banner" />
            <section>
                <h1>Hello Developer!</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </section>
        </DesktopHeader>
    );
}
