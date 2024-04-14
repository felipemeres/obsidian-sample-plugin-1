import emotionData from "./emotionData";

// Define the TypeScript interface for the emotion data structure
interface emotionParser {
	[primaryEmotion: string]: {
		[secondaryEmotion: string]: string[];
	};
}

// Import the JSON data and parse it into an EmotionData object
const emotionParser: emotionParser = JSON.parse(JSON.stringify(emotionData));
// Now you can use the emotionData object in your Obsidian plugin component

// Example usage:
function getTertiaryEmotions(primaryEmotion: string, secondaryEmotion: string): string[] {
	if (emotionParser[primaryEmotion] && emotionParser[primaryEmotion][secondaryEmotion]) {
		return emotionParser[primaryEmotion][secondaryEmotion];
	} else {
		return []; // Return an empty array if emotions are not found
	}
}

// Example: Get tertiary emotions for "Happy" and "Surprised"
const tertiaryEmotions = getTertiaryEmotions("Happy", "Surprised");
console.log(tertiaryEmotions); // Output: ["Confused", "Amazed", "Excited", ...]
