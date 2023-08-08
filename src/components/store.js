import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useFavoriteStore = create()(
	devtools(
		persist(
			(set, get) => ({
				favorites: [],
				addFavorite: (estate) => {
					set({ favorites: [...get().favorites, estate] });
				},

				removeFavorite: (estateId) =>
					set({
						favorites: [
							...get().favorites.filter(
								(estate) => estate !== estateId
							),
						],
					}),
			}),
			{
				name: 'settings',
			}
		)
	)
);

export default useFavoriteStore;
