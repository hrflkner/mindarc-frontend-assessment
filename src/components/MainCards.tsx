// Components
import { CardButton } from './shared/CardButton';

// Styled Wrappers
import ReactiveCard from './shared/ReactiveCard';

// Mock Data
// -- Incase of dynamic entries --
import { mockCardData } from './data/MockCardData';

export default function MainCardCollection() {
    return (
        <ReactiveCard>
            {mockCardData.map((entry) => (
                <section className="card">
                    <div className="card__thumbnail">
                        <img src={entry.thumbnail} alt="Filler" />
                    </div>
                    <div className="card__content">
                        <p>{entry.text}</p>
                        <CardButton />
                    </div>
                </section>
            ))}
        </ReactiveCard>
    );
}
