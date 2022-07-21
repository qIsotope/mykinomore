import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IFact, IMoviePerson } from '../../../types/IFilmsById';
import ItemActors from './ItemActors/ItemActors';
import { ItemFacts } from './ItemFacts/ItemFacts';
import './itemTabs.css'

interface IItemTabs {
	description: string | undefined;
	actors: IMoviePerson[] | undefined;
	facts: IFact[] | undefined
}

export const ItemTabs = (props: IItemTabs) => (

	<Tabs>
		<TabList>
			<Tab>Описание</Tab>
			<Tab>Актеры</Tab>
			<Tab>Факты</Tab>
		</TabList>
		{props.description &&
			<TabPanel>
				<div className='tabs-description'>
					{props.description}
				</div>
			</TabPanel>
		}
		{props.actors &&
			<TabPanel>
				<>
					<ItemActors actors={props.actors} />
				</>
			</TabPanel>
		}
		{props.facts &&
			<TabPanel>
				<>
					<ItemFacts facts={props.facts} />
				</>
			</TabPanel>
		}
	</Tabs>
);