import supertest from "supertest";
import app from "../src/app";
import { FruitInput } from "services/fruits-service";

const api = supertest(app);

describe('Fruits suit', () => {

    it('should return all fruits', async () => {
        
        const result = await api.get('/fruits');
        expect(result.status).toEqual(200)
    })

    it('should return a specific fruit', async () => {

        const body: FruitInput = {name: "pera", price: 10}
        await api.post('/fruits').send(body);
        
        const result = await api.get('/fruits/1');
        console.log(result.body);
        expect(result.status).toEqual(200)
    })

    it('should post a new fruit', async () => {
        const body: FruitInput = {name: "banana", price: 10}
        
        const result = await api.post('/fruits').send(body);
        console.log(result.body)
        expect(result.status).toEqual(201)
        
    })

})