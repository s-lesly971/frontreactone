
https://ubeerv2.netlify.app



# UBeer - Application de gestion de bières artisanales

UBeer est une application frontend React qui consomme l'API UBeer pour permettre aux utilisateurs de découvrir, acheter et gérer des biè

Cache des Produits
Stockage temporaire des bières pour accélérer le chargement
TTL (Time To Live) configurable, par défaut 1 heure
Endpoints: /redis/cache-beers et /redis/cached-beers
Panier Temporaire
Sauvegarde du panier pour utilisateurs non connectés
Permet de retrouver son panier même en fermant le navigateur
TTL de 24 heures pour ces données temporaires
Endpoints: /redis/temp-cart et /redis/temp-cart/{sessionId}
Migration de Panier
Transfert du panier temporaire vers un compte utilisateur après connexion
Évite la perte des articles lors de la connexion
Endpoint: /redis/migrate-cart
Statistiques et Analytics
Cache des statistiques d'utilisation et de vente
Endpoints: /redis/cache-stats et /redis/cached-stat
