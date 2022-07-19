import styled from 'styled-components';

const StyledCard = styled.section`
    /* Layout */
    width: 100%;
    margin: 8rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-around;

    .card {
        /* Layout */
        width: 350px;
        height: 600px;
        margin-right: 4rem;
        text-align: center;
        padding: 2rem;

        /* Design */
        // NOTE: There was a vague border in the reference image.
        border: 1px solid rgba(0, 0, 0, 0.05);

        &:last-of-type {
            margin-right: 0;
        }
    }

    img {
        /* Layout */
        width: 100%;
        height: auto;

        /* Design */
        border-radius: 5px;
    }
    .card__thumbnail {
        /* Layout */
        padding-bottom: 2rem;
    }

    .card__content {
        /* Layout */
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* Design */
        text-align: center;
    }

    p {
        /* Typography */
        color: black;
        font-family: sans-serif;
        font-size: 1.8rem;
        line-height: 1.5;
    }

    /*
        Desktop and Tablets (> 525px)
    */
    @media screen and (max-width: 1150px) {
        .card {
            width: 280px;
            padding: 0;

            border: none;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
    @media screen and (max-width: 950px) {
        .card {
            width: 250px;
            margin: 1rem;
            padding: 0;

            border: none;

            &:last-of-type {
                margin-right: 0;
            }
        }

        p {
            font-size: 1.5rem;
        }
    }

    /*
        Grid Layout for Tablets (> 480px)
    */
    @media screen and (max-width: 850px) {
        /* Layout */
        width: 90%;
        display: grid;
        grid-gap: 4rem;

        .card {
            /* Layout */
            width: 100%;
            height: max-content;
            display: grid;
            grid-template-columns: 1.4fr 2fr;
            justify-content: center;
            align-items: center;
        }

        .card__thumbnail {
            /* Layout */
            padding-bottom: 0;
        }
        img {
            /* Layout */
            width: 100%;
        }

        .card__content {
            /* Layout */
            height: 100%;
            padding: 0.5rem 4rem;
        }
    }
    @media screen and (max-width: 750px) {
        /* Layout */
        width: 90%;
    }
    @media screen and (max-width: 650px) {
        p {
            /* Typography */
            font-size: 1.3rem;
        }
    }

    /*
        Mobile Layout (> 250px)
    */
    @media screen and (max-width: 480px) {
        /* Layout */
        margin: 4rem auto;
        display: grid;
        grid-template-rows: auto auto auto;
        grid-gap: 4rem;
        width: 95%;

        .card {
            /* Layout */
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        .card__content {
            /* Layout */
            width: 90%;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            /* Design */
            text-align: center;
        }
        .card__thumbnail {
            /* Layout */
            padding-bottom: 2rem;
        }
        img {
            /* Layout */
            width: 80%;
        }
    }
    @media screen and (max-width: 320px) {
        .card {
            /* Layout */
            width: 100%;
        }
        .card__content {
            /* Layout */
            width: 100%;
            padding: 0 1rem;
        }
        p {
            /* Typography */
            font-size: 1.2rem;
        }
    }
`;

export default function ReactiveCard({
    children,
}: {
    children: React.ReactNode;
}) {
    return <StyledCard>{children}</StyledCard>;
}
