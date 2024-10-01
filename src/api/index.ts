export interface IFriend  {
	name: string,
	isOnline: boolean,
	id: number
}

const friends = [
	{
		name: 'Andrey',
		isOnline: true,
		id: 1
	},
	{
		name: 'Ruslan',
		isOnline: false,
		id: 2
	},
	{
		name: 'Sergey',
		isOnline: false,
		id: 3
	},
	{
		name: 'Oksana',
		isOnline: false,
		id: 5
	},
	{
		name: 'Ekatrina',
		isOnline: false,
		id: 6
	},
	{
		name: 'Pavel',
		isOnline: false,
		id: 7
	}
	
]

class FriendsAPI {
	friends: IFriend[];
	constructor(friends: IFriend[]) {
		this.friends = friends;
	}

	getAllFriends(): Promise<IFriend[]> {
		return new Promise((resolve) => setTimeout(() => {
			resolve(friends)
		}, 5000))
	}

	getOnlineFriends(): Promise<IFriend[]>  {
		return new Promise((resolve) => setTimeout(() => {
			const onlineFriends = friends.filter((friend) => friend.isOnline === true);
			resolve(onlineFriends)
		}, 500))
	}
}

const getFriends = new FriendsAPI(friends);
export default getFriends;