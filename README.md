# lol-livegame-client
A client for the League of Legends [Game Client Api](https://developer.riotgames.com/docs/lol#game-client-api). With types and constant values and event handling.

## Make Requests

Use the `GameClient` object to make requests to the game.

#### Usage Example:

````typescript
GameClient.getAllGameData().then(gameData: GameData => console.log(JSON.stringify(gameData)))
````

In case I am too slow updating the library, you can make custom requests:

````typescript
GameClient.requestLiveApi('/liveclientdata/newendpoint').then(response => console.log(response))
````


## Events

To listen to events, subscribe to the `LoLEventManager` and start fetching events (requesting `GET ​https://127.0.0.1:2999/liveclientdata/eventdata`) .
You can start fetching before the game starts. The event manager will retry until the game starts or max retries are reached. 

#### Usage Example:

````typescript

const eventManager = new LoLEventManager()

eventManager.subscribe((event: LoLEvent) => {
    switch (event.EventName) {
        case EventName.GameStart:
            console.log('Game started!')
            break;
        case EventName.GameEnd:
            console.log('Game ended!')
            break;
        default:
            console.log('Unknown event:', event.EventName)
    }
});
````

You can find supported events in the [EventName](src/data/LoLEvents.ts) enum.

## Static Names

##### Turrets and Inhibitors

Turrets and inhibitors are named in the format `{type}_T{team}_L{lane}_P{position}_{native id}` but you dont need to remember this. Thats what the [Turret](src/data/Turret.ts) class is for. It extracts all information from the name.  

You can find all names at [StructureNames.md](src/resources/StructureNames.md)

#### Usage Example:

````typescript
const turretName = (event as TurretKilled).TurretKilled; //Turret_TChaos_L1_P2_2237424422

const turret = new Turret(eventName);

if(turret.lane === Lane.Mid) { // Lane.Mid === 1
    console.log("Mid lane turret killed!")
}
````

# Contributing
Contributions are welcome!  
If something doesn't work, make an issue or a pull request...duh





