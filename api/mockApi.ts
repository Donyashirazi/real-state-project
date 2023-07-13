// mockApi.js
import { properties } from './mockData';

// Simulate API delay (ms)
const API_DELAY = 500;

// Fetch all properties
export async function fetchProperties() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(properties);
		}, API_DELAY);
	});
}

// Fetch a single property by ID
export async function fetchPropertyById(id: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const property = properties.find((p) => p.id === id);
			if (property) {
				resolve(property);
			} else {
				reject(new Error('Property not found'));
			}
		}, API_DELAY);
	});
}

// Search properties by location or other criteria
export async function searchProperties(query: any) {
	return new Promise((resolve) => {
		setTimeout(() => {
			const filteredProperties = properties.filter((property) =>
				property.location.toLowerCase().includes(query.toLowerCase())
			);
			resolve(filteredProperties);
		}, API_DELAY);
	});
}

// Save a property to favorites
export async function savePropertyToFavorites(propertyId: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const property = properties.find((p) => p.id === propertyId);
			if (property) {
				// Here, you can implement logic to save the property to user's favorites
				resolve(console.log('resollve'));
			} else {
				reject(new Error('Property not found'));
			}
		}, API_DELAY);
	});
}

// Remove a property from favorites
export async function removePropertyFromFavorites(propertyId: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const property = properties.find((p) => p.id === propertyId);
			if (property) {
				// Here, you can implement logic to remove the property from user's favorites
				resolve(console.log('resollve2'));
			} else {
				reject(new Error('Property not found'));
			}
		}, API_DELAY);
	});
}
