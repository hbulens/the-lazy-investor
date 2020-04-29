﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using TheLazyInvestor.Entities;
using TheLazyInvestor.Infrastructure;

namespace TheLazyInvestor.Web.Repositories
{
    public abstract class Repository<T> where T : class, new()
    {
        protected readonly LazyInvestorDbContext Context;

        protected Repository(LazyInvestorDbContext context)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<T>> GetAllAsync()
            => await Context.Set<T>().ToListAsync();

        public async Task<T> CreateAsync(T entity)
        {
            EntityEntry<T> newEntity = await Context.Set<T>().AddAsync(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<T> UpdateAsync(T entity)
        {
            EntityEntry<T> newEntity = Context.Set<T>().Update(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }

        public async Task<T> DeleteAsync(T entity)
        {
            EntityEntry<T> newEntity = Context.Set<T>().Remove(entity);
            await Context.SaveChangesAsync();
            return newEntity.Entity;
        }
    }
}