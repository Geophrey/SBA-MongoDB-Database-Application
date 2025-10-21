Music Rating API

Document Organization

Data Format:

Artist - document
 	Artist Name - String
 	Artist Age - Number
	Genre - String (could do genres array to group better)
 	Artist Awards - Array of award objects
 		[ Award1 - object
 			Award name - String
 			Award presenter - String
 			Award prestige level - String
 			Date received - String
 		Award2
 		Award3 ]
 	Singles - Array of single song objects
 		[ Song1 - Object
 				Song Name - String
 				Features - Array of strings
 					[feature1, feature2, ...]
 				Lyrics - String
 				Song Length - String
 				Song Release Date - String
 				Song Rating - String
 				Song Reviews - Array of strings (array of object to do reviewer identification)
 					[review1, review2, ...]
 			Song2
 			Song3 ]
 	Albums - Array of album objects
 		[ Album1 - object of objects
 			{ Album Name - String
 			Number of Songs - number
 			List of Songs - Array of album song objects
 				[ Song1 - Object
 					Song Name - String
 					Features - Array of strings
 						[feature1, feature2, ...]
 					Lyrics - String
 					Song Length - String
 					Song Release Date - String
 					Song Rating - String
 					Song Reviews - Array of strings (array of object to do reviewer identification)
 						[review1, review2, ...]
 				Song2
 				Song3 ]
 			Album Length - String
 			Album Release Date - String
 			Album Rating - String
 			Album Reviews - Array of strings (array of object to do reviewer identification)
 				[review1, review2, ...] }
 		Album2
 		Album3 ]

<!-- Queried Data format:

Song Name
Artist Name
Album or Single Boolean
Album Name -->