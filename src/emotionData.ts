interface EmotionData {
	name: string;
	children: EmotionData[] | string[];
}

const emotionData: EmotionData[] = [
	{
		"name": "Angry",
		"children": [
			{
				"name": "Let Down",
				"children": ["Betrayed", "Resentful"]
			},
			{
				"name": "Humiliated",
				"children": ["Disrespected", "Ridiculed"]
			},
			{
				"name": "Bitter",
				"children": ["Indignant", "Violated"]
			},
			{
				"name": "Mad",
				"children": ["Furious", "Jealous"]
			},
			{
				"name": "Aggressive",
				"children": ["Provoked", "Hostile"]
			},
			{
				"name": "Frustrated",
				"children": ["Infuriated", "Annoyed"]
			},
			{
				"name": "Distant",
				"children": ["Withdrawn", "Numb"]
			},
			{
				"name": "Critical",
				"children": ["Skeptical", "Dismissive"]
			}
		]
	},
	{
		"name": "Fearful",
		"children": [
			{
				"name": "Scared",
				"children": ["Helpless", "Frightened"]
			},
			{
				"name": "Anxious",
				"children": ["Overwhelmed", "Worried"]
			},
			{
				"name": "Insecure",
				"children": ["Inadequate", "Inferior"]
			},
			{
				"name": "Weak",
				"children": ["Worthless", "Insignificant"]
			},
			{
				"name": "Rejected",
				"children": ["Excluded", "Persecuted"]
			},
			{
				"name": "Threatened",
				"children": ["Nervous", "Exposed"]
			}
		]
	},
	{
		"name": "Bad",
		"children": [
			{
				"name": "Bored",
				"children": ["Apathetic", "Indifferent"]
			},
			{
				"name": "Busy",
				"children": ["Pressured", "Rushed"]
			},
			{
				"name": "Stressed",
				"children": ["Overwhelmed", "Out of Control"]
			},
			{
				"name": "Tired",
				"children": ["Sleepy", "Unfocused"]
			}
		]
	},
	{
		"name": "Surprised",
		"children": [
			{
				"name": "Startled",
				"children": ["Shocked", "Dismayed"]
			},
			{
				"name": "Confused",
				"children": ["Disillusioned", "Perplexed"]
			},
			{
				"name": "Amazed",
				"children": ["Astonished", "Awe"]
			},
			{
				"name": "Excited",
				"children": ["Eager", "Energetic"]
			}
		]
	},
	{
		"name": "Happy",
		"children": [
			{
				"name": "Playful",
				"children": ["Aroused", "Cheeky"]
			},
			{
				"name": "Content",
				"children": ["Free", "Joyful"]
			},
			{
				"name": "Interested",
				"children": ["Curious", "Inquisitive"]
			},
			{
				"name": "Proud",
				"children": ["Successful", "Confident"]
			},
			{
				"name": "Accepted",
				"children": ["Respected", "Valued"]
			},
			{
				"name": "Powerful",
				"children": ["Courageous", "Creative"]
			},
			{
				"name": "Peaceful",
				"children": ["Loving", "Thankful"]
			},
			{
				"name": "Trusting",
				"children": ["Sensitive", "Intimate"]
			},
			{
				"name": "Optimistic",
				"children": ["Hopeful", "Inspired"]
			}
		]
	},
	{
		"name": "Sad",
		"children": [
			{
				"name": "Lonely",
				"children": ["Isolated", "Abandoned"]
			},
			{
				"name": "Vulnerable",
				"children": ["Victimized", "Fragile"]
			},
			{
				"name": "Despair",
				"children": ["Grief", "Powerless"]
			},
			{
				"name": "Guilty",
				"children": ["Ashamed", "Remorseful"]
			},
			{
				"name": "Depressed",
				"children": ["Inferior", "Empty"]
			},
			{
				"name": "Hurt",
				"children": ["Embarrassed", "Disappointed"]
			}
		]
	},
	{
		"name": "Disgusted",
		"children": [
			{
				"name": "Disapproving",
				"children": ["Judgmental", "Embarrassed"]
			},
			{
				"name": "Disappointed",
				"children": ["Appalled", "Revolted"]
			},
			{
				"name": "Awful",
				"children": ["Nauseated", "Detestable"]
			},
			{
				"name": "Repelled",
				"children": ["Horrified", "Hesitant"]
			}
		]
	}
]

export default emotionData;
