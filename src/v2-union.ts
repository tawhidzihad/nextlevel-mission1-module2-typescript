//* Literal Type
type Status = "pending"

const status: Status = "pending"


//* Basic Union
type Identity = string | number

const id: Identity = "323"


//* Literal Union
type Role = "user" | "admin"

const userRole: Role = "admin"


//* Object Union
type Admin = { id: number, role: "admin", privilages: string[] }
type Member = { id: number, role: "member", plans: string[] }

type User = Admin | Member

const user: User = { id: 123, role: "admin", privilages: []}
