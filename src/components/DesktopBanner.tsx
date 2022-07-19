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
    height: ${(props) => props.deviceWidth * (660 / 1920)}px;
    img {
        /* Layout */
        position: absolute;
        width: 100%;
        min-width: 525px;
        height: auto;
        overflow: hidden;
        z-index: -10;

        /* Design */
        filter: brightness(60%);
    }

    section {
        /* Layout */
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* Typography */
        color: white;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2.5px;
        line-height: 0.8;

        h1 {
            /* Typography */
            font-size: 7.3rem;
            letter-spacing: 2.5px;
            font-weight: bold;

            /* Layout */
            // Lock Margin relative to background
            margin-bottom: ${(props) => props.deviceWidth * (20 / 1920)}px;
        }
        p {
            /* Typography */
            font-size: 4.3rem;
            letter-spacing: 2.5px;
            font-weight: 200;
        }
    }
    /* Adjust Font Size */
    @media (max-width: 1400px) {
        section {
            h1 {
                font-size: 6.5rem;
            }
            p {
                font-size: 3rem;
            }
        }
    }
    @media (max-width: 1200px) {
        section {
            h1 {
                font-size: 5.5rem;
            }
            p {
                font-size: 2.2rem;
            }
        }
    }
    @media (max-width: 900px) {
        section {
            h1 {
                font-size: 4rem;
            }
            p {
                font-size: 1.8rem;
            }
        }
    }
`;

export default function DesktopBanner() {
    const [deviceHeight, deviceWidth] = useWindowSize();

    return (
        <DesktopHeader deviceWidth={deviceWidth} deviceHeight={deviceHeight}>
            <img src="http://via.placeholder.com/1920x650" alt="Banner" />
            <section>
                <h1>Hello Developer!</h1>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </section>
        </DesktopHeader>
    );
}
